export function saveLectures(item) {
  const slug = item.slug;
  window.localStorage.setItem(slug, 'finished');
  console.log('saved');
  console.log(slug);
}

export function restoreLecture(item) {
  const slug = item.slug;
  window.localStorage.removeItem(slug);
}
