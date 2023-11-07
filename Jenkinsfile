pipeline {
    agent { docker { image 'node:20.9.0-alpine3.18' } }
    
    environment {
        VAR_UM   = 'true'
        VAR_DOIS = 'Algum nome'
    }

    stages {
        stage('Build') {
            steps {
                sh 'node --version'
		echo "Var um: ${VAR_UM}"
		echo "Var dois: ${VAR_DOIS}"
		sh 'printenv'
            }
        }
	stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}

