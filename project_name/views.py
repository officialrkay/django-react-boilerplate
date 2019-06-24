from django.shortcuts import render

def homepage( request ):
    return render( request, 'Home/index.html' )

def blogpage( request ):
    return render( request, 'Blog/index.html' )
