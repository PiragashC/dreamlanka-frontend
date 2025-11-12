'use client';

import React, {
  CSSProperties,
  useEffect,
  useId,
  useRef,
} from 'react';
import {
  AnimationPlaybackControls,
  animate,
  useMotionValue,
} from 'framer-motion';

interface ResponsiveImage {
  src: string;
  alt?: string;
  srcSet?: string;
}

interface AnimationConfig {
  preview?: boolean;
  scale: number;
  speed: number;
}

interface NoiseConfig {
  opacity: number;
  scale: number;
}

export interface ShadowOverlayProps {
  type?: 'preset' | 'custom';
  presetIndex?: number;
  customImage?: ResponsiveImage;
  sizing?: 'fill' | 'stretch';
  color?: string;
  animation?: AnimationConfig;
  noise?: NoiseConfig;
  style?: CSSProperties;
  className?: string;
  titleClassName?: string;
  hideHeading?: boolean;
  blendMode?: CSSProperties['mixBlendMode'];
  gradientLayers?: string[];
  backgroundImage?: string;
  maskImage?: string;
  noiseImage?: string;
  noiseBlendMode?: CSSProperties['mixBlendMode'];
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
): number {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
  const id = useId();
  const cleanId = id.replace(/:/g, '');
  const instanceId = `shadowoverlay-${cleanId}`;
  return instanceId;
};

export function Component({
  sizing = 'fill',
  color = 'rgba(128, 128, 128, 1)',
  animation,
  noise,
  style,
  className,
  titleClassName,
  hideHeading = false,
  blendMode = 'screen',
  gradientLayers,
  backgroundImage,
  maskImage,
  noiseImage,
  noiseBlendMode = 'soft-light',
}: ShadowOverlayProps) {
  const id = useInstanceId();
  const animationEnabled = Boolean(animation && animation.scale > 0);
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateMotionValue = useMotionValue(180);
  const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);
  const displacementScale = animation
    ? mapRange(animation.scale, 1, 100, 20, 100)
    : 0;
  const animationDuration = animation
    ? mapRange(animation.speed, 1, 100, 1000, 50)
    : 1;
  const defaultGradients = [
    'radial-gradient(circle at 18% 25%, rgba(191, 219, 254, 0.42), transparent 60%)',
    'radial-gradient(circle at 72% 12%, rgba(96, 165, 250, 0.35), transparent 62%)',
    'radial-gradient(circle at 50% 80%, rgba(14, 116, 144, 0.28), transparent 68%)',
  ];
  const activeGradients =
    gradientLayers && gradientLayers.length ? gradientLayers : defaultGradients;
  const backgroundLayers = [
    ...activeGradients,
    backgroundImage,
    color
      ? `linear-gradient(135deg, ${color}, rgba(15, 23, 42, 0.88))`
      : undefined,
  ].filter(Boolean) as string[];
  const blendModes = [
    ...activeGradients.map(() => 'screen'),
    backgroundImage ? 'soft-light' : undefined,
    color ? 'normal' : undefined,
  ].filter(Boolean) as string[];
  const backgroundSizes = backgroundLayers.map(() => 'cover').join(',');

  useEffect(() => {
    if (feColorMatrixRef.current && animationEnabled) {
      if (hueRotateAnimation.current) {
        hueRotateAnimation.current.stop();
      }

      hueRotateMotionValue.set(0);

      hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
        duration: animationDuration / 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        ease: 'linear',
        delay: 0,
        onUpdate: (value: number) => {
          if (feColorMatrixRef.current) {
            feColorMatrixRef.current.setAttribute('values', String(value));
          }
        },
      });

      return () => {
        if (hueRotateAnimation.current) {
          hueRotateAnimation.current.stop();
        }
      };
    }

    return undefined;
  }, [animationEnabled, animationDuration, hueRotateMotionValue]);

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : 'none',
          mixBlendMode: blendMode,
        }}
      >
        {animationEnabled && (
          <svg style={{ position: 'absolute' }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${mapRange(
                    animation.scale,
                    0,
                    100,
                    0.001,
                    0.0005
                  )},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}

        <div
          style={{
            backgroundImage: [
              ...backgroundLayers,
            ].join(','),
            backgroundBlendMode:
              blendModes.length > 0 ? blendModes.join(',') : undefined,
            backgroundSize: backgroundSizes,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage:
              maskImage ??
              "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')",
            WebkitMaskImage:
              maskImage ??
              "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')",
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            WebkitMaskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {!hideHeading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <h1
            className={
              titleClassName ??
              'md:text-7xl text-6xl lg:text-8xl font-bold text-center text-foreground relative z-20'
            }
          >
            Etheral Shadows
          </h1>
        </div>
      )}

      {noise && noise.opacity > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              noiseImage ??
              'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: noise.scale * 200,
            backgroundRepeat: 'repeat',
            mixBlendMode: noiseBlendMode,
            opacity: Math.min(Math.max(noise.opacity, 0), 1) * 0.65,
          }}
        />
      )}
    </div>
  );
}

export const EtherealShadow = Component;
export default Component;

