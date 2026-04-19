pipeline {
    agent any

    stages {
        stage('w/o docker') {
            steps {
                sh '''
                echo "without docker"
                ls -la
                touch container_no.txt
                '''
            }
        }
        stage('w docker'){
            agent{
                docker{
                image 'node:18-alpine'
                reuseNode true
                
                }
            }
            steps{
                sh '''
                echo "with docker"
                ls -la
                touch container_yes.txt
                '''
                
            }
        }
    }
}
