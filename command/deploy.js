const path = require('path');
const fs = require('fs-extra');
const { spawn } = require('child_process');
const inquirer = require('inquirer');
const SvnUploading = require("svn-uploading");
const Webpack = require('webpack');
const webpackConfig = require('../build/webpack.deploy');
const settings = require('../config/settings');
const { log } = require('../lib/util');

async function uploadAssets(src, dist, msg){
    return new Promise(async (resolve, reject) => {
        const svnPath = path.resolve(dist, settings.appId);
        const devPath = path.resolve(src, settings.appId);
        
        await fs.copy(devPath, svnPath)
        
        const indexPath = path.join(svnPath, 'index.htm');
        fs.stat(indexPath, (err, stats) => {
            if(err) throw err;
            if(stats.isFile()){
                fs.unlink(indexPath);
                resolve();
            }
        });
        return;
        // svn = new SvnUploading({
        //     cwd: dist
        // })
        // svn.check().then(status=>{
        //     //do something
        //     //status ==> {addList:["addfilepath1","addfilepath2",...],modifyList:["modifypath1",modifypath2,...],deleteList:[],unknownList:[]}
        //     console.log(status);
        // }).catch(err=>{
        //     reject(err);
        // })
    })
}

async function uploadTpl(src, dist, msg){
    return new Promise(async (resolve, reject) => {
        const svnPath = path.resolve(dist, settings.appId);
        const devPath = path.resolve(src, settings.appId);
        
        await fs.copy(devPath, svnPath)
        
        fs.readdir(svnPath, (err, files) => {
            if(err) throw err;
            files.forEach(filename => {
                const filedir = path.join(svnPath, filename);
                fs.stat(filedir, (err, stats) => {
                    if(err) throw err;
                    const isFile = stats.isFile();
                    if(!isFile){
                        fs.remove(filedir, err => {
                            if(err) throw err;
                        })
                    }
                    if(isFile){
                        if(filedir.indexOf('pc') !== -1){
                            spawn("mv", [filedir, path.resolve(svnPath, '../')]);
                            fs.removeSync(svnPath)
                        }
                    }
                    resolve();
                })
            })
        })
    })
}

async function uploadSrc(src, dist, msg){
    return new Promise(async (resolve, reject) => {
        const svnPath = path.resolve(dist, settings.appId);
        const devPath = path.resolve(src, settings.appId);
        
        await fs.copy(devPath, svnPath)
        resolve();
    })
}

function getTitle(){
    return new Promise((resolve, reject) => {
        const index = path.resolve(settings.basePath, 'src', settings.appId, 'index.html');
        fs.readFile(index, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            };
            let title = data.match(/<title>(.*)<\/title>/)[1];
            resolve(title);
        });
    })
}

Webpack(webpackConfig, async (err,stats)=>{
    if (err || stats.hasErrors()) {
        log(err, 'red');
        return;
    }
    try{
        const title = await getTitle();

        const answers = await inquirer
            .prompt([
                {
                    name: 'msg',
                    default: title,
                    type: 'input',
                    message: '???????????????????????????????????????(???????????????5?????????????????????????????????????????????)???'
                }
            ])

        if(answers.msg.length <= 5){
            answers.msg = title;
        }
        log('-----??????????????????????????????svn-----', 'blue');

        const localDist = path.resolve(settings.basePath, 'dist');
        const remoteImgDist = path.resolve(settings.basePath, '../img1.37wanimg.com');
        const remoteTplDist = path.resolve(settings.basePath, '../common.tpl.37.com');

        // ??????????????????
        await uploadAssets(localDist, remoteImgDist, answers.msg)
        log('?????????????????????????????????????????????????????????', 'green');

        // ????????????
        await uploadTpl(localDist, remoteTplDist, answers.msg)
        log('???????????????????????????????????????????????????', 'green');
        
        const answers2 = await inquirer
            .prompt([
                {
                    name: 'flag',
                    default: title,
                    type: 'confirm',
                    message: '????????????????????????????????????svn???'
                }
            ])
        
        if(answers2.flag){
            const localSrc = path.resolve(settings.basePath, 'src');
            const remoteSrc = path.resolve(settings.basePath, '../src');
            
            // ????????????
            await uploadSrc(localSrc, remoteSrc, answers2.msg);
            log('???????????????????????????????????????????????????', 'green');
        }
    }catch(error){
        log(error, 'red');
    }
})