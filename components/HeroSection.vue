<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

const { personalInfo } = useCvData();

const containerRef = ref(null);

const techs = [
  {
    name: 'Vue.js', color: '#42b883',
    svg: '<path d="M2 3h3l7 12L19 3h3L12 21z" fill="currentColor" opacity=".3"/><path d="M8 3l4 7 4-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>'
  },
  {
    name: 'Nuxt', color: '#00dc82',
    svg: '<path d="M1 20L9 4l8 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M15 20l4-8 4 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  },
  {
    name: 'JavaScript', color: '#f7df1e',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">JS</text>'
  },
  {
    name: 'TypeScript', color: '#3178c6',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">TS</text>'
  },
  {
    name: 'HTML5', color: '#e34f26',
    svg: '<path d="M4 2l1.5 17L12 22l6.5-3L20 2z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">5</text>'
  },
  {
    name: 'CSS3', color: '#264de4',
    svg: '<path d="M4 2l1.5 17L12 22l6.5-3L20 2z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">3</text>'
  },
  {
    name: 'React', color: '#61dafb',
    svg: '<ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(-60 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'
  },
  {
    name: 'PHP', color: '#777bb4',
    svg: '<ellipse cx="12" cy="12" rx="11" ry="7" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><text x="12" y="15" text-anchor="middle" font-size="7.5" font-weight="800" font-family="Arial,sans-serif" fill="currentColor">php</text>'
  },
  {
    name: 'Laravel', color: '#ff2d20',
    svg: '<path d="M7 4l3 5-2 2 3 4 5-6 2 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11v6c0 2 2 3 4 3h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: 'Node.js', color: '#339933',
    svg: '<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">N</text>'
  },
  {
    name: 'Docker', color: '#2496ed',
    svg: '<path d="M21 11c1.5 0 2.5 1.5 2 3.5-1 3.5-5 6.5-11 6.5S1 18 1 14.5c0-2 1-3.5 3-3.5h17z" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 11V8m3 3V8m3 3V8m-3-3V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
  },
  {
    name: 'Git', color: '#f05032',
    svg: '<circle cx="6" cy="5" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="5" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="19" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><path d="M6 7.5v3c0 3 2 5 6 6m6-9v3c0 3-2 5-6 6" fill="none" stroke="currentColor" stroke-width="1.5"/>'
  },
  {
    name: 'Figma', color: '#a259ff',
    svg: '<rect x="5" y="1" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="12" y="1" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="5" y="8" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><circle cx="15.5" cy="11.5" r="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="5" y="15" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/>'
  },
  {
    name: 'Linux', color: '#fcc624',
    svg: '<rect x="2" y="3" width="20" height="18" rx="3" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><path d="M7 14l3-3-3-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 14h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
];

const N = techs.length;
const RADIUS = 155;

const state = reactive({
  tiltX: 0,
  tiltY: 0,
  speed: 1,
  angle: 0,
});

let tgtTiltX = 0;
let tgtTiltY = 0;
let tgtSpeed = 1;
let raf = null;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function tick() {
  state.tiltX = lerp(state.tiltX, tgtTiltX, 0.06);
  state.tiltY = lerp(state.tiltY, tgtTiltY, 0.06);
  state.speed = lerp(state.speed, tgtSpeed, 0.04);
  state.angle = (state.angle + 0.3 * state.speed) % 360;
  raf = requestAnimationFrame(tick);
}

function onMove(e) {
  const el = containerRef.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  const nx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
  const ny = (e.clientY - r.top - r.height / 2) / (r.height / 2);
  tgtTiltX = ny * -10;
  tgtTiltY = nx * 10;
  tgtSpeed = 1.5 + (1 - Math.min(1, Math.hypot(nx, ny))) * 2;
}

function onLeave() {
  tgtTiltX = 0;
  tgtTiltY = 0;
  tgtSpeed = 1;
}

const wrapperStyle = computed(() => ({
  transform: `rotateX(${65 + state.tiltX}deg) rotateY(${state.tiltY}deg) rotateZ(${state.angle}deg)`,
}));

function getItemStyle(i) {
  const a = (360 / N) * i;
  return {
    transform: `rotateZ(${a}deg) translateX(${RADIUS}px) rotateZ(${-a - state.angle}deg) rotateY(${-state.tiltY}deg) rotateX(${-(65 + state.tiltX)}deg)`,
  };
}

onMounted(() => {
  raf = requestAnimationFrame(tick);
});

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf);
});
</script>

<template>
  <section id="about" class="section">
    <div class="wrapper">
      <div class="content" v-animate-on-scroll>
        <span class="greeting">Hello, I'm</span>
        <h1 class="name">{{ personalInfo.name }}</h1>
        <h2 class="role">{{ personalInfo.title }}</h2>
        <p class="description">{{ personalInfo.summary }}</p>

        <div class="contact">
          <p class="location"><span>📍</span> {{ personalInfo.location }}</p>
          <div class="actions">
            <a :href="'mailto:' + personalInfo.email" class="button primary"
              >Contact Me</a
            >
            <a
              :href="personalInfo.github"
              target="_blank"
              class="button outline"
              rel="noopener"
              >GitHub</a
            >
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              class="button outline"
              rel="noopener"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>

      <div class="visual" v-animate-on-scroll>
        <div
          class="planet-container"
          ref="containerRef"
          @mousemove="onMove"
          @mouseleave="onLeave"
        >
          <!-- Profile image -->
          <div class="planet">
            <img
              src="~/assets/css/img/Alan_Reibel_Profile.png"
              alt="Alan Reibel"
            />
          </div>

          <!-- 3D Orbit ring -->
          <div class="orbit-wrapper" :style="wrapperStyle">
            <div class="orbit-track"></div>
            <div
              v-for="(tech, i) in techs"
              :key="tech.name"
              class="orbit-item"
              :style="getItemStyle(i)"
              :title="tech.name"
            >
              <div class="orbit-icon" :style="{ '--c': tech.color }">
                <svg viewBox="0 0 24 24" class="icon-svg" v-html="tech.svg"></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  container-type: inline-size;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(0, 220, 130, 0.15) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    z-index: var(--z-negative);
    filter: blur(80px);
  }

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    .content {
      opacity: 0;
      transform: translateY(30px);
      transition:
        opacity 0.8s ease-out,
        transform 0.8s ease-out;

      &.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .greeting {
        display: block;
        font-size: 1.5rem;
        color: var(--accent-secondary);
        margin-bottom: 0.5rem;
        font-weight: 500;
      }

      .name {
        font-size: 4.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        background: var(--gradient-text);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.1;
      }

      .role {
        font-size: 2rem;
        color: var(--text-secondary);
        font-weight: 400;
        margin-bottom: 1.5rem;
      }

      .description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        line-height: 1.8;
        max-width: 550px;
        margin-bottom: 2.5rem;
      }

      .contact {
        .location {
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .actions {
          display: flex;
          gap: 1rem;

          .button {
            padding: 0.8rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease;
            font-size: 1rem;

            &:active {
              transform: scale(0.98);
            }

            &.primary {
              background: var(--gradient-main);
              color: #000;
              border: none;
              box-shadow: 0 4px 15px rgba(0, 220, 130, 0.3);

              &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 220, 130, 0.4);
              }
            }

            &.outline {
              background: transparent;
              border: 1px solid var(--accent-primary);
              color: var(--accent-primary);

              &:hover {
                background: rgba(0, 220, 130, 0.1);
              }
            }
          }
        }
      }
    }

    .visual {
      opacity: 0;
      transform: translateY(30px);
      transition:
        opacity 0.8s ease-out,
        transform 0.8s ease-out;
      transition-delay: 0.2s;

      &.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .planet-container {
        position: relative;
        width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 800px;
        margin: 0 auto;
      }

      .planet {
        position: relative;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        z-index: 2;
        box-shadow:
          0 0 30px rgba(0, 220, 130, 0.3),
          0 0 60px rgba(0, 220, 130, 0.12),
          0 0 100px rgba(0, 220, 130, 0.06);
        border: 2px solid rgba(0, 220, 130, 0.3);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }

      .orbit-wrapper {
        position: absolute;
        width: 310px;
        height: 310px;
        top: 50%;
        left: 50%;
        margin-top: -155px;
        margin-left: -155px;
        transform-style: preserve-3d;
        will-change: transform;
      }

      .orbit-track {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid rgba(0, 220, 130, 0.12);
        box-shadow:
          0 0 20px rgba(0, 220, 130, 0.04),
          inset 0 0 20px rgba(0, 220, 130, 0.04);
      }

      .orbit-item {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        transform-style: preserve-3d;
        will-change: transform;
      }

      .orbit-icon {
        width: 42px;
        height: 42px;
        margin: -21px 0 0 -21px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--c);
        background: rgba(2, 4, 32, 0.88);
        border: 1.5px solid var(--c);
        box-shadow:
          0 0 14px color-mix(in srgb, var(--c) 30%, transparent),
          inset 0 0 10px color-mix(in srgb, var(--c) 8%, transparent);
        backdrop-filter: blur(6px);
        transition: box-shadow 0.3s ease;
        user-select: none;

        .icon-svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  @container (max-width: 960px) {
    .wrapper {
      grid-template-columns: 1fr;
      text-align: center;
      padding-top: 2rem;

      .content {
        .name {
          font-size: 3.5rem;
        }
        .description {
          margin: 0 auto 2.5rem;
        }
        .contact {
          .location {
            justify-content: center;
          }
          .actions {
            justify-content: center;
          }
        }
      }

      .visual {
        display: none;
      }
    }
  }
}
</style>
