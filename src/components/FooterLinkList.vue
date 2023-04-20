<template>
  <div class="flex flex-col gap-4 text-center text-base">
    <p class="font-bold text-white"><slot name="heading"></slot></p>

    <div class="flex flex-col gap-2">
      <slot></slot>
    </div>
  </div>
</template>
