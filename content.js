function onMessage(request, sender, sendResponse) {
	$(".noGoogleSearchDirect").remove();
	$("h3.r a").each(function(){
		var icon = document.createElement('img');
		var iconUrl = chrome.extension.getURL("icon-19.png");
		icon.src = iconUrl;

		var link = document.createElement('a');
		link.target ="_blank";
		link.href = $(this).attr("href");
		$(link).addClass("noGoogleSearchDirect");
		$(link).append(icon);

		$(this).before(link);
		//console.log($(this).attr("href"));
	});
    sendResponse({});
}

chrome.extension.onMessage.addListener(onMessage);