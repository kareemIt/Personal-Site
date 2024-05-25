FROM node:lts-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install all dependencies
RUN npm install --silent

# Move node_modules to the parent directory
RUN mv node_modules ../

# Copy the rest of the application code
COPY . .

# Install react-scripts separately
RUN npm install --silent react-scripts

# Set environment variables
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Change ownership of the application files
RUN chown -R node /usr/src/app

# Switch to a non-root user
USER node

# Start the application
CMD ["npm", "start"]
