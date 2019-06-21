from .env import PRODUCTION

SECRET_KEY = 'H5LfeZ(2R%t+oq\'BvN*-<^B2(Nd$3>'

ALLOWED_HOSTS = [ 'project.com' ]

if not PRODUCTION:
    ALLOWED_HOSTS = [ '*' ]

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'}
]

X_FRAME_OPTIONS = 'DENY'
