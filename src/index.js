const git = require('simple-git');
const fs = require('fs-extra');
const path = require('path');

/**
 * 从指定GitHub仓库拉取指定分支代码
 * @param {string} repoUrl - GitHub仓库URL
 * @param {string} branch - 要拉取的分支
 * @param {string} outputDir - 输出目录
 */
async function cloneRepo(repoUrl, branch, outputDir) {
  // 确保输出目录存在
  await fs.ensureDir(outputDir);

  // 清理输出目录
  await fs.emptyDir(outputDir);

  // 克隆仓库到指定目录
  await git().clone(repoUrl, outputDir, { '--branch': branch });

  // 移除.git目录
  const gitDir = path.join(outputDir, '.git');
  if (await fs.exists(gitDir)) {
    await fs.remove(gitDir);
  }
}

/**
 * 获取GitHub仓库的分支列表
 * @param {string} repoUrl - GitHub仓库URL
 * @returns {Promise<string[]>} - 分支列表
 */
async function getBranches(repoUrl) {
  try {
    // 使用 ls-remote 获取所有远程分支
    const branchResult = await git().listRemote(['--refs', repoUrl]);

    // 提取分支名称（格式: commitHash\trefs/heads/branchName）
    const branches = branchResult
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.split('\t')[1])
      .filter(ref => ref && ref.startsWith('refs/heads/'))
      .map(ref => ref.replace('refs/heads/', ''))
      .filter(branch => branch !== 'HEAD' && branch !== 'main');

    return branches;
  } catch (error) {
    console.error('获取分支列表失败:', error.message);
    return [];
  }
}

module.exports = {
  cloneRepo,
  getBranches
};