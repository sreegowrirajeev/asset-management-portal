node {

    stage('Checkout') {
        git branch: 'main',
            url: 'https://github.com/sreegowrirajeev/asset-management-portal.git'
    }

    stage('Build Backend') {
        script {
            docker.build("asset-backend:v5", "./backend")
        }
    }

    stage('Build Frontend') {
        script {
            docker.build("asset-frontend:v8", "./frontend")
        }
    }

    stage('Deploy') {
        sh '''
        cd /home/docker-lab
        docker compose down
        docker compose up -d
        docker restart backend
        '''
    }

    stage('Verify') {
        sh 'docker ps'
    }
}
