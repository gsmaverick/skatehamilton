var SH = SH || {};
SH.models      = SH.models || {};
SH.collections = SH.collections || {};
SH.views       = SH.views || {};
SH.app         = SH.app || {};
SH.utils       = SH.utils || {};

// Application-wide geocode initialized once
SH.utils.geocoder = new google.maps.Geocoder();