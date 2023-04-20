<template>
  <div
    class="flex h-40 items-center rounded-lg bg-dark-violet bg-shorten-mobile bg-right-top bg-no-repeat px-6 md:h-[168px] md:bg-shorten-desktop md:px-16"
  >
    <form class="flex w-full flex-col gap-4 md:flex-row md:gap-6">
      <input
        type="text"
        placeholder="Shorten a link here..."
        class="h-12 w-full rounded-md px-4 text-base placeholder:text-gray md:h-16 md:text-xl"
      />

      <div class="rounded-md bg-white">
        <button
          type="submit"
          class="h-12 w-full whitespace-nowrap rounded-md bg-cyan font-bold text-white hover:opacity-50 md:h-16 md:px-10 md:text-xl"
        >
          Shorten It!
        </button>
      </div>
    </form>
  </div>
</template>
