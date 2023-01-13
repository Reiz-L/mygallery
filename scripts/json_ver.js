window.onload = function(){
    var currentVersion = document.documentElement.getAttribute("data-version");
    // 使用 fetch API 请求 version.json 文件
    fetch("jsons/ver.json")
    .then(response => response.json())
    .then(data => {
        // 获取最新版本号
        var latestVersion = data.version;
            // 如果当前版本小于最新版本, 刷新页面
        if (currentVersion < latestVersion) {
            location.reload();
        }
    });

    fetch('jsons/gallery.json')
    .then(response => response.json())
    .then(json => {
        // 遍历 JSON 对象中的每个属性
        for (var key in json) {
            // 确保属性为自有属性
            if (json.hasOwnProperty(key)) {
                // 访问属性中的图片链接地址
                var imageURL = json[key].url;
                var img_cap = json[key].caption
                var _width = "";
                var added_html = '';
                if(navigator.userAgent.match(/Android/i)) {
                    _width = "48%"
                } else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                    _width = "47%"
                } else {
                    _width = "30%";
                }
                added_html='<div class="image-container" style="width:'+ _width +'"><img src="'+ imageURL +'" alt="image"><a href="">'+ img_cap +'</a></div>';
                $(".gallery").append(added_html);
            }
        }
    });
    
}