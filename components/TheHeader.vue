<script setup></script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo">Alan<span>Reibel</span></div>
      <nav class="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-floating);
  padding: 1rem 0;
  background: rgba(2, 4, 32, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  container-type: inline-size;

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);

      span {
        color: var(--accent-primary);
      }
    }

    .nav {
      ul {
        display: flex;
        gap: 2.5rem;

        li {
          a {
            font-weight: 500;
            position: relative;
            padding: 0.5rem 0;

            &::after {
              content: "";
              position: absolute;
              width: 0;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: var(--accent-primary);
              transition: width 0.3s ease;
            }

            &:hover {
              color: var(--accent-primary);

              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
