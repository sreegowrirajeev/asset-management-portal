node {

    stage('Verify Files') {

        sh '''
        echo "VERIFYING FILES"

        pwd

        ls -ltr
        '''
    }

    stage('Docker Compose Down') {

        sh '''
        echo "STOPPING CONTAINERS"

        cd /home/docker-lab

        docker compose down
        '''
    }

    stage('Docker Compose Up') {

        sh '''
        echo "STARTING CONTAINERS"

        cd /home/docker-lab

        docker compose up -d
        '''
    }

    stage('Restart Backend') {

        sh '''
        echo "RESTARTING BACKEND"

        docker restart backend
        '''
    }

    stage('Container Status') {

        sh '''
        echo "RUNNING CONTAINERS"

        docker ps

        echo "COMPOSE STATUS"

        cd /home/docker-lab

        docker compose ps
        '''
    }

}
