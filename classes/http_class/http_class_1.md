<!-- // Nodes has a lot of built in modules
// One of those module is http

// URL - uniform resource locator
// It is the web address used to locate resources on the internet

// URI is uniform resource identifier
// URL is also a url

// to go to a particular location we need the address
// it is essential to access website and specific locations -->


<!-- Hierarchy order of the url -->
# https://www.example.com:8080/path/to/resource?query=search#section

# https: - protocol
<!-- to specified the particular connection to access resources e.g http, https, ftp, tls, ssl, mailto, file://, ws, wss-->
<!-- since we are considering web so we deal with http and https -->
<!-- https: Hyper Text Transfer Protocol -->

<!-- Protocolas are used for deep links -->

# www.example.com - host 
<!-- This is the particular place where the website resides -->
<!-- It is not a domian name or basic thing, they are called ids, you buy domain name but they guve you an ip -->
<!-- e.g Ip: 10.199.222.555 represent a pc (remote virtual machine) when u buy a server you buy a virtual pc-->
<!-- You IP must have a firewall or else your pc files can be browsed from somewhere else -->
<!-- What we render is not your pc files but your remote server -->

# C - is the host 
<!-- C:/Users/ --> 

## Local host that is the internal server of your pc within your system network - 127.0.0.1
<!-- bash -->
# netstat to check address on your pc how apps communicate, your address on various website

# so when we type www.example.com we are using dns to mask the ip e.g 10.177.233.23:3748


<!-- When you are building your project we bind your ip ti a paticular port -->
<!-- check http://who.is --> 

# :8080 - default port

# /path//to/resource - path

<!-- It is specific, it indicates the specific path is resources on the server -->
<!-- Domain name and sever name are different. You buy the domain name to access the server -->


# www is a subdomain, example.com is the domain which is the the one you buy

# Other examples or subdomain e.g web.facebook.com, map.google.com
# /home, /contact are base urls 

# #?query=serch - query strings comes after question mark '?'
# They are key paired values that we can pass into a url to get a specific information
# We have search query, filter query,

# #section - used by front dev to navigate particular pages


# HTTP Status Codes

<!-- As a backend developer we need to know particular status code but not all but enough -->

<!-- HTTP Status codes are three-digit responses sent by a server to indicate the outcome of a client's request -->
<!-- They are five categories of status codes  -->

# 1xx (Informational Responses)
# 2xx (Successful Responses) e.g 200
# 3xx (Redirectional  Responses)
# 4xx (Client Error Responses) e.g 400
# 5xx (Server Error Responses)



