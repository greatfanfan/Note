[`git`](https://baike.hk.xileso.top/baike-Git): 分布式版本控制

######git相关操作
1. 打开终端，mkdir test
2. cd test
3. ls -al 查看该目录下的文件
4. git init （或者 git clone xxx）克隆仓库
5. git config --global user.name xxx 配置用户名
6. git config --global user.email yyy 配置邮箱
7. git config --list 查看配置
8. global、local、system的差别：global针对当前登陆用户进行全局配置、local针对当前仓库进行配置、system针对系统中的所有用户进行配置。
9. git status 查看git状态，文件修改提交状态。 工作区
10. git add xxx / . .代表所有已修改的文件。 添加git跟踪,暂存文件。 暂存区
11. git commit -m 'xxx' 提交文件。 仓库区
12. git log 查看日志
13. git remote add origin xxx  把本地仓库配置一个远程的仓库
14. ssh-keygen -t rsa -C "xxx@xx.com" 生成公私钥  id_rsa id_rsa.pub
15. ssh -T git@github.com 
16. git push origin 推送
