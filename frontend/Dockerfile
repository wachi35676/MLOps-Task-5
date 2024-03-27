# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight server to serve the built app
FROM nginx:stable-alpine

# Copy the built app from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]