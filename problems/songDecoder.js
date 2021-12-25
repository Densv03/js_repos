function songDecoder(song) {
    song = song.replace(/WUB/g, ' ');
    while(song[0]==' ')
    song=song.replace(' ','');
    for (let i = 0; i < song.length; ++i) {
        if (song[i] == ' ' && song[i + 1] == ' ') {
            song = song.replace('  ', ' ');
            i--;
        }
    }
    while(song[song.length-1]==' ')
    song = song.substring(0, song.length - 1)
    return song;
}
console.log(songDecoder("WUBAWUBBWUBCWUB"));