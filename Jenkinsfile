pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                bat 'npm install'
                echo '✅ Dependencies installed successfully.'
            }
        }

        stage('Type check') {
            steps {
                echo '🔍 Running TypeScript type check...'
                bat 'npm run type-check'
                echo '✅ Type check completed.'
            }
        }

        stage('Run tests') {
            steps {
                echo '🧪 Running tests...'
                bat 'npm run test:ci'
                echo '✅ Tests passed.'
            }
        }

        stage('Build project') {
            steps {
                echo '🔨 Building project...'
                bat 'npm run build'
                echo '✅ Build completed successfully.'
            }
        }
    }

    post {
        success {
            echo '🎉 CI passed! All stages completed successfully.'
        }
        failure {
            echo '💥 CI failed! Check the logs for errors.'
        }
    }
}
