from django.contrib import admin
from django.urls import path,include
from Shop.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', include('cadastre.urls')),
    path('shop/', include('Shop.urls'))
]
