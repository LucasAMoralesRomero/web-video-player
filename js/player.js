fetch ('./videos.json')
    .then(response => response.json())
    .then(videoFiles => {
        const videoPlayer = document.getElementById('videoPlayer');
        let currentVideoIndex = 0;
        //Cargamos el primer video en el reproductor
        videoPlayer.src = videoFiles[currentVideoIndex];
        //Agregamos un event listener para saber cuando se termina el video
        videoPlayer.addEventListener('ended', () => {
            //Mediante una suma del indice actual + 1 %(modulo) del largo del array, avanzamos al proximo video y, al llegar al final volvemos al primero
            currentVideoIndex = (currentVideoIndex + 1) % videoFiles.lenght;
            //Cargamos el siguiente video en el reproductor
            videoPlayer.src = videoFiles[currentVideoIndex];
            videoPlayer.play();
        });
    })
    .catch(error => {
        console.error("Error cargando los videos: ", error);
    });
