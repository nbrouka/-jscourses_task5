function getVkImages(response) {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
    var vkGallery = new VkGallery();
    vkGallery.addItems(response.response.items);
    document.body.appendChild(vkGallery.get());
}

function addScript(src) {
    var scriptElement = document.createElement("script");
    scriptElement.src = src;
    document.head.appendChild(scriptElement);
}

function init() {
    var getVkImagesRequest = "https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count=108";
    addScript(getVkImagesRequest + '&callback=getVkImages');
}

init();