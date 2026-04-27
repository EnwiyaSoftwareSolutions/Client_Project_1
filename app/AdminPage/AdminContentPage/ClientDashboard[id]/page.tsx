'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

type UploadedDocument = {
  id: string;
  file: File;
};

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const power = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** power;
  return `${value.toFixed(value >= 10 || power === 0 ? 0 : 1)} ${units[power]}`;
};


  export default async function ClientDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("ClientDashboard ID:", id);
  const [value, setValue] = useState('');
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [documents, setDocuments] = useState<UploadedDocument[]>([]);

  const profilePreview = useMemo(() => {
    if (!profileFile) return null;
    return URL.createObjectURL(profileFile);
  }, [profileFile]);

  useEffect(() => {
    return () => {
      if (profilePreview) {
        URL.revokeObjectURL(profilePreview);
      }
    };
  }, [profilePreview]);

  const handleProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    setProfileFile(selectedFile);
  };

  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList?.length) return;

    const incomingFiles = Array.from(fileList).map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
      file,
    }));

    setDocuments((prev) => [...incomingFiles, ...prev]);
    event.target.value = '';
  };

  const removeDocument = (id: string) => {
    setDocuments((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--foreground)] md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="rounded-2xl border border-[var(--setBorderColorGold)]/30 bg-[var(--card)]/80 p-6 shadow-sm backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Client Workspace</p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[var(--headder-text-color)]">Client Dashboard</h1>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Manage profile details, upload case documents, and track notes in one place.</p>
            </div>
          
            <div className="rounded-full border border-[var(--setBorderColorGold)]/35 bg-[var(--primary-accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--headder-text-color)]">
              {documents.length} files uploaded
            </div>
            <a href="/AdminPage/AdminContentPage" className="ml-auto">
              <div  className="rounded-full border border-[var(--setBorderColorGold)]/35 bg-[var(--primary-accent)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--headder-text-color)]">
              return to dashboard
            </div>
            </a>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <aside className="space-y-6">
            <article className="rounded-2xl border border-[var(--setBorderColorGold)]/25 bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--headder-text-color)]">Profile</h2>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Upload client photo and keep identity details current.</p>

              <div className="mt-5 flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full border border-[var(--setBorderColorGold)]/35 bg-[var(--primary)]/20">
                  {profilePreview ? (
                    <img src={profilePreview} alt="Client profile" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-[var(--headder-text-color)]">
                      C
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="inline-flex cursor-pointer items-center rounded-lg border border-[var(--setBorderColorGold)]/40 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--headder-text-color)] transition hover:bg-[var(--primary-accent)]/10">
                    Upload Image
                    <input type="file" accept="image/*" className="hidden" onChange={handleProfileChange} />
                  </label>
                  <p className="text-xs text-[var(--muted-foreground)]">PNG, JPG up to 5MB</p>
                </div>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--muted-foreground)]">Status</dt>
                  <dd className="font-medium text-[var(--foreground)]">Active</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--muted-foreground)]">Case Type</dt>
                  <dd className="font-medium text-[var(--foreground)]">General Consultation</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[var(--muted-foreground)]">Last Update</dt>
                  <dd className="font-medium text-[var(--foreground)]">Today</dd>
                </div>
              </dl>
            </article>

            <article className="rounded-2xl border border-[var(--setBorderColorGold)]/25 bg-[var(--card)] p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-[var(--headder-text-color)]">Upload Documents</h2>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Attach contracts, IDs, forms, or supporting files.</p>

              <label className="mt-4 block cursor-pointer rounded-xl border border-dashed border-[var(--setBorderColorGold)]/45 bg-[var(--primary)]/10 p-5 text-center transition hover:bg-[var(--primary-accent)]/10">
                <span className="block text-sm font-medium text-[var(--foreground)]">Click to add files</span>
                <span className="mt-1 block text-xs text-[var(--muted-foreground)]">You can select multiple files at once.</span>
                <input type="file" multiple className="hidden" onChange={handleFilesChange} />
              </label>

              <ul className="mt-4 max-h-72 space-y-2 overflow-auto pr-1">
                {documents.length === 0 && (
                  <li className="rounded-lg border border-[var(--border)] bg-[var(--primary)]/5 px-3 py-3 text-sm text-[var(--muted-foreground)]">
                    No files uploaded yet.
                  </li>
                )}

                {documents.map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--primary)]/5 px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-[var(--foreground)]">{item.file.name}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{formatBytes(item.file.size)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeDocument(item.id)}
                      className="rounded-md border border-red-400/40 px-2 py-1 text-xs font-medium text-red-500 transition hover:bg-red-500/10"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          </aside>

          <article className="rounded-2xl border border-[var(--setBorderColorGold)]/25 bg-[var(--card)] p-5 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[var(--headder-text-color)]">Case Notes</h2>
                <p className="text-sm text-[var(--muted-foreground)]">Use rich text editor for client updates, meeting notes, and follow-up plans.</p>
              </div>
              <button
                type="button"
                className="rounded-lg border border-[var(--setBorderColorGold)]/45 bg-[var(--primary-accent)]/15 px-4 py-2 text-sm font-semibold text-[var(--headder-text-color)] transition hover:bg-[var(--primary-accent)]/25"
              >
                Save Draft
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}