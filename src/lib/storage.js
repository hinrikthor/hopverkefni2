export function  loadSavedLectures(){
    if (getItem(slug) == 'stored') {
        return true;
    } else {
        return false;
    }
}

export function saveLectures(slug){
    setItem(slug, 'stored');
}