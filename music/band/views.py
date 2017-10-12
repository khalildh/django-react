from django.shortcuts import render, get_object_or_404
from .models import Band
from rest_framework import generics
from .serializers import BandSerializer

# Create your views here.
def all_bands(request):
    return render(request, 'band/all_bands.html')


def band(request, band_id):
    band = Band.objects.get(pk=band_id)
    return render(request, 'band/band.html', {'band': band})

class BandDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BandSerializer

    def get_object(self):
        obj = get_object_or_404(Band, id=self.kwargs['band_id'])
        return obj
