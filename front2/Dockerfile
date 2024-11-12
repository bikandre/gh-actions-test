FROM centos:centos7

# Update the yum repository to use a different mirror (optional)
RUN sed -i 's|mirrorlist.centos.org|mirror.centos.org|g' /etc/yum.repos.d/CentOS-Base.repo

RUN yum install httpd -y
COPY index.html /var/www/html/

CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
EXPOSE 80
