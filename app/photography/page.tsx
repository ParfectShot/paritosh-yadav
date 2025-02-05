"use client"
import { useState } from 'react';
import Card from '@root/components/Card';
import Grid from '@root/components/Grid';
import Marquee from '@root/components/Marquee'; // Assume you have a Marquee component
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import Image1 from "./_assets/1.jpg";
import Image2 from "./_assets/2.jpg"
import Image3 from "./_assets/3.jpg";
import Image4 from "./_assets/4.jpg";
import Image5 from "./_assets/5.jpg";
import Image6 from "./_assets/6.jpg";
import Image7 from "./_assets/7.jpg";
import ActionButton from '@root/components/ActionButton';

const images = [
  // ...list of image paths from _assets folder...
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
];

export default function PhotographyPage() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <Card title="Photography">
      <div className="flex justify-center space-x-4 mb-4">
        <ActionButton onClick={() => setViewMode('grid')}>Grid</ActionButton>
        <ActionButton onClick={() => setViewMode('auto')}>Auto</ActionButton>
      </div>
      {viewMode === 'grid' ? (
        <Grid style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', display: 'grid' }}>
          {images.map((src, index) => (
            <div key={index} style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
              <Image src={src} layout="fill" objectFit="cover" alt={`${index + 1}`} />
            </div>
          ))}
        </Grid>
      ) : (
        <Marquee direction="up" height="100vh">
          <div style={{ display: 'grid', gap: '1rem' }}>
            {images.map((src, index) => (
              <div key={index} style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image src={src} layout="responsive" objectFit="contain" alt={`${index + 1}`} />
              </div>
            ))}
          </div>
        </Marquee>
      )}
    </Card>
  );
}
