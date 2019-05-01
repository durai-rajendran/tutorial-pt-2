module.exports = {
	apps: [{
		name: 'tutorial-2',
		script: './index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: 'ec2-18-216-74-73.us-east-2.compute.amazonaws.com',
			key: '~/.ssh/first-group.pem',
			ref: 'origin/master',
			repo: 'git@github.com:durai-rajendran/tutorial-pt-2.git',
			path: '/home/ubuntu/tutorial-2',
			'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}
