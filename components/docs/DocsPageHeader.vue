<script setup lang="ts">
import { useContent } from '#imports'

defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
})

const { page } = useContent()
</script>

<template>
  <header>
    <div>
      <div class="flex items-center">
        <h1 class="inline-block text-2xl font-extrabold tracking-tight u-text-gray-900 sm:text-3xl">
          {{ page.title }}
        </h1>
      </div>
    </div>

    <p class="mt-2 text-lg u-text-gray-500">
      {{ page.description }}
    </p>

    <p class="mt-2 text-sm italic font-semibold u-text-gray-500">
      {{ page.readingTime }}
    </p>

    <hr class="my-8 u-border-gray-100" />
  </header>
</template>
