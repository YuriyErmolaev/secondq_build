export function drawGalleyItem( item ){
    const itemElement = document.createElement('div');
    itemElement.className = 'gallery-item';

    let mediaElement;
    if( item.type === 'image' ) {
        mediaElement = document.createElement('img');
        mediaElement.className = 'gallery-item__image';
        mediaElement.src = item.resource;
    } else if( item.type === 'audio' ) {
        mediaElement = document.createElement('audio');
        mediaElement.className = 'gallery-item__audio';
        mediaElement.controls = true;
    } else if( item.type === 'video' ) {
        mediaElement = document.createElement('video');
        mediaElement.className = 'gallery-item__video';
        mediaElement.controls = true;
    }



    mediaElement.src = item.resource;

    const titleElement = document.createElement('span');
    titleElement.className = 'gallery-item__title';
    titleElement.textContent = item.title;

    itemElement.appendChild(mediaElement);
    itemElement.appendChild(titleElement);

    return itemElement;
}