'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

// Base64 encoded small pink/purple gradient as fallback
const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBaRXhpZgAATU0AKgAAAAgABQMBAAUAAAABAAAASgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAASdFESAAQAAAABAAASdAAAAAAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAgACAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKA//2Q=='

interface ImageFallbackProps extends ImageProps {
  fallbackSrc?: string
}

const ImageFallback = ({
  src,
  alt,
  fallbackSrc,
  ...rest
}: ImageFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    // Simple placeholder during SSR
    return (
      <div 
        className="relative bg-gradient-to-br from-brand-pink/30 to-brand-purple/30"
        style={{ width: '100%', height: '100%' }}
      ></div>
    )
  }

  return (
    <div className={`relative ${hasError ? 'bg-gradient-to-br from-brand-pink/30 to-brand-purple/30' : ''}`}>
      <Image
        {...rest}
        src={imgSrc || src}
        alt={alt}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onError={() => {
          if (!hasError) {
            setHasError(true)
            // Use inline SVG data URL if fallbackSrc isn't provided
            setImgSrc(fallbackSrc || blurDataURL)
          }
        }}
      />
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-brand-darkRed">
            <span className="text-sm font-medium">{alt}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageFallback 