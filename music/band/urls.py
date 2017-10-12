from django.conf.urls import include, url
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (
    all_bands,
    band,
    BandDetail
)


# urlpatterns = [
#     url(r'^$', all_bands),
#     url(r'^(?P<band_id>\d+)/$', band),
#     url(r'^api/(?P<band_id>\d+)/$', BandDetail.as_view()),
# ]
#
# urlpatterns += url(r'^hello/', all_bands)

urlpatterns = [
    url(r'^api/(?P<band_id>\d+)/$', BandDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])

urlpatterns += [
    url(r'^$', all_bands),
    url(r'^(?P<band_id>\d+)/$', band),
]
