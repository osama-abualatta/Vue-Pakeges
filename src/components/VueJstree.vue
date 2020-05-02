<template>
  <div>
    <v-jstree
      :data="data"
      show-checkbox
      multiple
      allow-batch
      whole-row
      @item-click="itemClick"
    ></v-jstree>
  </div>
</template>

<script>
import VJstree from "vue-jstree";
export default {
  components: {
    VJstree,
  },
  data() {
    return {
      data: [
        {
          id: 0,
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "",
          opened: true,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 1,
              text: "initially selected",
              value: "initially selected",
              icon: "",
              opened: false,
              selected: true,
              disabled: false,
              loading: false,
              children: [],
            },
          ],
        },
        {
          id: 7,
          text: "Same but with checkboxes",
          value: "Same but with checkboxes",
          icon: "",
          opened: true,
          selected: false,
          disabled: false,
          loading: false,
          children: [
            {
              id: 9,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-danger",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: [],
            },
            {
              id: 10,
              text: "initially open",
              value: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              selected: false,
              disabled: false,
              loading: false,
              children: [
                {
                  id: 11,
                  text: "Another node",
                  value: "Another node",
                  icon: "",
                  opened: false,
                  selected: false,
                  disabled: false,
                  loading: false,
                  children: [],
                },
              ],
            },
            {
              id: 12,
              text: "custom icon",
              value: "custom icon",
              icon: "fa fa-warning icon-state-warning",
              opened: false,
              selected: false,
              disabled: false,
              loading: false,
              children: [],
            },
            {
              id: 13,
              text: "disabled node",
              value: "disabled node",
              icon: "fa fa-check icon-state-success",
              opened: false,
              selected: false,
              disabled: true,
              loading: false,
              children: [],
            },
          ],
        },
        {
          id: 14,
          text: "And wholerow selection",
          value: "And wholerow selection",
          icon: "",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
        },
        {
          id: 15,
          text: "drag disabled",
          value: "drag disabled",
          icon: "fa fa-warning icon-state-danger",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
          dragDisabled: true,
        },
        {
          id: 16,
          text: "drop disabled",
          value: "drop disabled",
          icon: "fa fa-warning icon-state-danger",
          opened: false,
          selected: false,
          disabled: false,
          loading: false,
          children: [],
          dropDisabled: true,
        },
      ],
    };
  },
  methods: {
    itemClick(node) {
      console.log(node.model.text + " clicked !");
    },
  },
};
</script>

<style></style>
