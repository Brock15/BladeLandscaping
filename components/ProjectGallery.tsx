'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { projects, type Project } from '@/lib/projects';
import { projectClips } from '@/lib/project-clips';

const categories = ['All Work', 'Patios & Stone', 'Landscapes', 'Preparation', 'Commercial'];
const photographs = projects.flatMap((project) => project.images.map((picture) => ({ ...picture, title: project.title })));

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (source: string, trigger: HTMLButtonElement) => void }) {
  return <article id={project.id} className="min-w-0 bg-white rounded-2xl overflow-hidden shadow-lg">
    <button type="button" className="gallery-image-button" aria-label={`Open ${project.title} photo`} onClick={(event) => onOpen(project.images[0].src, event.currentTarget)}><Image src={project.images[0].src} alt={project.images[0].alt} width={project.images[0].width} height={project.images[0].height} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw" className="w-full aspect-[4/3] object-cover" /><span className="gallery-open-label">View Photo <span aria-hidden="true">↗</span></span></button>
    <div className="p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-wider text-[var(--blade-green)] mb-2">{project.category}</p><h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-3">{project.title}</h3><p className="text-sm text-[var(--blade-gray)] leading-relaxed">{project.caption}</p>
      {project.images.length > 1 && <div className="grid grid-cols-3 gap-2 mt-5">{project.images.slice(1).map((picture, index) => <button key={picture.src} type="button" aria-label={`Open ${project.title} photo ${index + 2}`} className="rounded-lg overflow-hidden" onClick={(event) => onOpen(picture.src, event.currentTarget)}><Image src={picture.src} alt={picture.alt} width={120} height={120} sizes="100px" className="w-full aspect-square object-cover" /></button>)}</div>}
    </div>
  </article>;
}

export default function ProjectGallery() {
  const [category, setCategory] = useState('All Work');
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const visibleProjects = category === 'All Work' ? projects : projects.filter((project) => project.category === category);
  const visibleClips = category === 'All Work' ? projectClips : projectClips.filter((clip) => clip.category === category);
  const current = photographs[activeImage];
  function openImage(source: string, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveImage(photographs.findIndex((picture) => picture.src === source));
    dialogRef.current?.showModal();
  }
  function moveImage(direction: number) {
    setActiveImage((previous) => (previous + direction + photographs.length) % photographs.length);
  }
  function handleKeys(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      moveImage(event.key === 'ArrowRight' ? 1 : -1);
    }
  }
  return <section ref={galleryRef} className="section-padding bg-[var(--blade-off-white)]"><div className="container-custom">
    <div className="flex flex-wrap justify-center gap-3 mb-10" aria-label="Filter projects">{categories.map((item) => <button key={item} type="button" className={`gallery-filter ${category === item ? 'is-selected' : ''}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <h2 className="text-2xl font-bold mb-7">A Closer Look</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start">{visibleProjects.slice(0,3).map((project) => <ProjectCard key={project.id} project={project} onOpen={openImage} />)}</div>
    {visibleClips.length > 0 && <div className="mt-14" id="project-videos"><h2 className="text-2xl font-bold mb-3">From the Job Site</h2><p className="text-[var(--blade-gray)] mb-7">Finished results and the work behind them. Choose a clip to play.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">{visibleClips.map((clip) => <article key={clip.source} className="bg-white rounded-2xl overflow-hidden shadow-lg min-w-0"><video controls playsInline preload="none" onPlay={(event) => { const activeVideo = event.currentTarget; galleryRef.current?.querySelectorAll('video').forEach((video) => { if (video !== activeVideo) video.pause(); }); }} poster={clip.poster} className="gallery-video" aria-label={`${clip.title} project video`}><source src={clip.source} type="video/mp4" />Your browser cannot play this video. <a href={clip.source}>Open the project video</a>.</video><div className="p-5"><h3 className="text-lg font-bold mb-2">{clip.title}</h3><p className="text-sm leading-relaxed text-[var(--blade-gray)]">{clip.caption}</p></div></article>)}</div></div>}
    {visibleProjects.length > 3 && <div className="mt-14"><h2 className="text-2xl font-bold mb-7">More Project Photos</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 items-start">{visibleProjects.slice(3).map((project) => <ProjectCard key={project.id} project={project} onOpen={openImage} />)}</div></div>}
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="viewer-title" aria-describedby="viewer-help" onKeyDown={handleKeys} onClose={() => triggerRef.current?.focus()}>
      <div className="viewer-toolbar"><div><h2 id="viewer-title" className="font-bold">{current.title}</h2><p className="text-sm text-white/70" aria-live="polite">Photo {activeImage + 1} of {photographs.length}</p></div><button type="button" onClick={() => dialogRef.current?.close()} className="viewer-control" aria-label="Close photo viewer">Close <span aria-hidden="true">×</span></button></div>
      <div className="viewer-image"><Image key={current.src} src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="(max-width: 767px) 95vw, 85vw" className="object-contain" /></div>
      <div className="viewer-bottom"><button type="button" className="viewer-control" onClick={() => moveImage(-1)} aria-label="Previous photo">← Previous</button><button type="button" className="viewer-control" onClick={() => moveImage(1)} aria-label="Next photo">Next →</button></div><p id="viewer-help" className="text-xs text-white/65 mt-3 text-center">Use the arrow keys to browse. Press Escape to close.</p>
    </dialog>
  </div></section>;
}
