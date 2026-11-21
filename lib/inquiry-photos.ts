// Resize in the browser before a request crosses the server's upload limit.
export async function prepareInquiryPhoto(file: File): Promise<File> {
  const url = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = url;
    try { await image.decode(); } catch { throw new Error(`“${file.name}” could not be opened. Please use a JPG, PNG, or WebP photo.`); }
    let longestEdge = 1400;
    for (let attempt = 0; attempt < 3; attempt++) {
      const scale = Math.min(1, longestEdge / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Photos could not be prepared in this browser. Please try another browser.');
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      for (const quality of [0.84, 0.7, 0.55]) {
        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', quality));
        if (blob && blob.size <= 400_000) return new File([blob], file.name.replace(/\.[^.]+$/, '').slice(0, 110) + '.jpg', { type: 'image/jpeg' });
      }
      longestEdge = Math.round(longestEdge * 0.7);
    }
    throw new Error(`“${file.name}” is too detailed to upload. Please choose a smaller photo.`);
  } finally { URL.revokeObjectURL(url); }
}
