FROM ubuntu:latest

# Set environment variables to suppress interactive prompts during the build
ENV DEBIAN_FRONTEND=noninteractive

# Install tzdata and apache2 packages, and set the timezone to avoid interactive prompts
RUN apt-get update && apt-get install -y \
    tzdata \
    apache2 && \
    ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

# Copy your web content
COPY index.html /var/www/html/

# Set the default command to run the web server
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
EXPOSE 80
