var sourceEle = document.getElementById('source');
var targetEle = document.getElementById('target');
var source = sourceEle.value;
let div = '';
let picLinks = source.split('\n');
picLinks = picLinks.filter((x)=>{
    return x.trim();
})
div += '<figure class="wp-block-gallery columns-3 is-cropped">\r\n';
div += '	<ul class="blocks-gallery-grid">\r\n';
for (let i = 0;i&lt;picLinks.length;i++){
	div += '		<li class="blocks-gallery-item">\r\n';
	div += '			<figure>\r\n';
	div += '				<img alt="" class="wp-image-534" data-link="'+picLinks[i].trim()+'" src="'+picLinks[i].trim()+'?raw=true">\r\n';
	div += '			</figure>\r\n';
	div += '		</li>\r\n';
}
div += '	</ul>';
div += '</figure>';	
targetEle.value = div;
