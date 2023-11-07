pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo "Deu erro!"; exit 1'
            }
        }
    }
    post {
        always {
            echo 'Isso vai sempre ser executado!'
        }
        success {
            echo 'Isso vai funcionar em caso de sucesso'
        }
        failure {
            echo 'Isso vai funcionar em caso de erro'
        }
        unstable {
            echo 'Isso vai funcionar se for marcado como instável'
        }
        changed {
            echo 'Isso irá funcionar se o status da pipeline mudou'
        }
    }
}

