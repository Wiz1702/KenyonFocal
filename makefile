# Makefile for web deployment

all: PutHTML

PutHTML:
	cp Focal.html /var/www/html/KenyonFocal/
	cp Focal.css /var/www/html/KenyonFocal/
	cp Focal.js /var/www/html/KenyonFocal/
	
	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/KenyonFocal/
