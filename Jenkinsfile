pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run test') {
            steps {
                bat 'npm test -- --watch=false'
            }
        }

        stage('Build project') {
            steps {
                bat 'npm run build '
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
