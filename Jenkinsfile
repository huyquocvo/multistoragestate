pipeline {
    agent any
    tools { nodejs "NodeJS 25" }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                // Run tests, generating raw data into 'allure-results'
                bat 'npx playwright test --reporter=allure-playwright'
            }
        }
    }

    post {
        always {
            // Publish the Allure report as a post-build action
            script {
                // This step uses the 'allure' command provided by the Jenkins plugin
                // It reads the 'allure-results' and generates the HTML report
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}