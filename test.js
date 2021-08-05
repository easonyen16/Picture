var sourceEle = document.getElementById('source');
var targetEle = document.getElementById('target');
var source = sourceEle.value;
let div = '';
let picLinks = source.split('\n');
picLinks = picLinks.filter((x)=>{
    return x.trim();
})
div += '&lt;figure class="wp-block-gallery columns-3 is-cropped">\r\n';
div += '	&lt;ul class="blocks-gallery-grid">\r\n';
for (let i = 0;i&lt;picLinks.length;i++){
	div += '		&lt;li class="blocks-gallery-item">\r\n';
	div += '			&lt;figure>\r\n';
	div += '				&lt;img alt="" class="wp-image-534" data-link="'+picLinks[i].trim()+'" src="'+picLinks[i].trim()+'?raw=true">\r\n';
	div += '			&lt;/figure>\r\n';
	div += '		&lt;/li>\r\n';
}
div += '	&lt;/ul>';
div += '&lt;/figure>';	
targetEle.value = div;
