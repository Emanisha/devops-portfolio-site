FROM nginx:alpine

# Remove the default nginx web content
RUN rm -rf /usr/share/nginx/html/*

# Copy your portfolio files into the Nginx html directory
COPY . /usr/share/nginx/html

