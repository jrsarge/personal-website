#!/bin/bash

# Load the sensitive information from the productionServerInfo.sh file
source .key/productionServerInfo.sh

# Step 1: Build the Next.js app
printf "\n----> Create production build\n"
npm install
npm run build

# Step 2: Copy the build to the EC2 instance
printf "\n----> Copy the build to the EC2 instance\n"
scp -r -i "$SSH_KEY" .next "$HOSTNAME:$SERVICE_PATH"

# Step 3: SSH into the EC2 instance and navigate to the application
printf "\n----> Deploy the service on the EC2 instance\n"
ssh -i "$SSH_KEY" "$HOSTNAME" << EOF
cd $SERVICE_PATH
git pull
npm install
pm2 start npm --name $SERVICE -- start
pm2 save
EOF

# Finish
printf "\nDeployment complete\n"