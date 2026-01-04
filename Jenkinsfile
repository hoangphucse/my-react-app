pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Type check') {
            steps {
                bat 'npm run type-check'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build project') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ CI passed!'
        }
        failure {
            echo '❌ CI failed!'
        }
    }
}
