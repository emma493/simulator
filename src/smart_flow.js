/**
 * smart_flow.js
 * Intelligent multi-step flow connector for character creation funnel.
 * 
 * Manages state persistence across branching steps via sessionStorage.
 * Auto-detects user choices and routes to the appropriate next step.
 * 
 * Steps: [
  "origin",
  "booty",
  "face",
  "soul",
  "summary"
]
 * Branches: {
  "origin": [
    {
      "from_step": "origin",
      "to_step": "booty",
      "branch_type": "next",
      "label": "Continue to booty",
      "condition": null,
      "preserves_state": true
    }
  ],
  "booty": [
    {
      "from_step": "booty",
      "to_step": "face",
      "branch_type": "next",
      "label": "Continue to face",
      "condition": null,
      "preserves_state": true
    },
    {
      "from_step": "booty",
      "to_step": "origin",
      "branch_type": "back",
      "label": "Back to origin",
      "condition": null,
      "preserves_state": true
    }
  ],
  "face": [
    {
      "from_step": "face",
      "to_step": "soul",
      "branch_type": "next",
      "label": "Continue to soul",
      "condition": null,
      "preserves_state": true
    },
    {
      "from_step": "face",
      "to_step": "booty",
      "branch_type": "back",
      "label": "Back to booty",
      "condition": null,
      "preserves_state": true
    }
  ],
  "soul": [
    {
      "from_step": "soul",
      "to_step": "summary",
      "branch_type": "next",
      "label": "Continue to summary",
      "condition": null,
      "preserves_state": true
    },
    {
      "from_step": "soul",
      "to_step": "face",
      "branch_type": "back",
      "label": "Back to face",
      "condition": null,
      "preserves_state": true
    }
  ],
  "summary": [
    {
      "from_step": "summary",
      "to_step": "soul",
      "branch_type": "back",
      "label": "Back to soul",
      "condition": null,
      "preserves_state": true
    }
  ]
}
 */

(function() {
    "use strict";

    const STEPS = [
  "origin",
  "booty",
  "face",
  "soul",
  "summary"
];
    const BRANCHES = {
  "origin": [
    {
      "from_step": "origin",
      "to_step": "booty",
      "branch_type": "next",
      "label": "Continue to booty",
      "condition": null,
      "preserves_state": true
    }
  ],
  "booty": [
    {
      "from_step": "booty",
      "to_step": "face",
      "branch_type": "next",
      "label": "Continue to face",
      "condition": null,
      "preserves_state": true
    },
    {
      "from_step": "booty",
      "to_step": "origin",
      "branch_type": "back",
      "label": "Back to origin",
      "condition": null,
      "preserves_state": true
    }
  ],
  "face": [
    {
      "from_step": "face",
      "to_step": "soul",
      "branch_type": "next",
      "label": "Continue to soul",
      "condition": null,
      "preserves_state": true
    },
    {
      "from_step": "face",
      "to_step": "booty",
      "branch_type": "back",
      "label": "Back to booty",
      "condition": null,
      "preserves_state": true
    }
  ],
  "soul": [
    {
      "from_step": "soul",
      "to_step": "summary",
      "branch_type": "next",
      "label": "Continue to summary",
      "condition": null,
      "preserves_state": true
    },
    {
      "from_step": "soul",
      "to_step": "face",
      "branch_type": "back",
      "label": "Back to face",
      "condition": null,
      "preserves_state": true
    }
  ],
  "summary": [
    {
      "from_step": "summary",
      "to_step": "soul",
      "branch_type": "back",
      "label": "Back to soul",
      "condition": null,
      "preserves_state": true
    }
  ]
};
    const CANONICAL_ORDER = [
  "origin",
  "booty",
  "face",
  "soul",
  "summary"
];
    const STORAGE_KEY = "lovescape_flow_state";
    const CURRENT_STEP_KEY = "lovescape_current_step";

    // Default state
    const defaultState = {
        step: "origin",
        choices: {},
        history: [],
        completed: false,
        character: {
            ethnicity: null,
            bodyType: null,
            hairStyle: null,
            breastSize: null,
            relationship: null,
            personality: null,
        },
    };

    // Load state from sessionStorage
    function loadState() {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            if (raw) {
                return { ...defaultState, ...JSON.parse(raw) };
            }
        } catch (e) {
            console.warn("Failed to load flow state", e);
        }
        return { ...defaultState };
    }

    // Save state to sessionStorage
    function saveState(state) {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            sessionStorage.setItem(CURRENT_STEP_KEY, state.step);
        } catch (e) {
            console.warn("Failed to save flow state", e);
        }
    }

    // Get current state
    function getState() {
        return loadState();
    }

    // Update state with a new choice
    function setChoice(category, value) {
        const state = getState();
        state.choices[category] = value;
        state.character[category] = value;
        if (!state.history.includes(category)) {
            state.history.push(category);
        }
        saveState(state);
        return state;
    }

    // Navigate to a step
    function navigateTo(stepId, replace = false) {
        const state = getState();
        state.step = stepId;
        saveState(state);

        const url = `/create-ai-sex-girlfriend/${stepId}.html`;
        if (replace) {
            window.location.replace(url);
        } else {
            window.location.href = url;
        }
    }

    // Get next step based on canonical order or branches
    function getNextStep(currentStep) {
        const idx = CANONICAL_ORDER.indexOf(currentStep);
        if (idx >= 0 && idx + 1 < CANONICAL_ORDER.length) {
            return CANONICAL_ORDER[idx + 1];
        }
        // Fallback: use branches
        const branches = BRANCHES[currentStep] || [];
        const nextBranch = branches.find(b => b.branch_type === "next");
        return nextBranch ? nextBranch.to_step : null;
    }

    // Get previous step
    function getPrevStep(currentStep) {
        const idx = CANONICAL_ORDER.indexOf(currentStep);
        if (idx > 0) {
            return CANONICAL_ORDER[idx - 1];
        }
        const branches = BRANCHES[currentStep] || [];
        const backBranch = branches.find(b => b.branch_type === "back");
        return backBranch ? backBranch.to_step : null;
    }

    // Get all available branches for current step
    function getBranchesForStep(stepId) {
        return BRANCHES[stepId] || [];
    }

    // Check if step is final
    function isFinalStep(stepId) {
        return stepId === "summary";
    }

    // Check if step is entry
    function isEntryStep(stepId) {
        return stepId === "origin";
    }

    // Auto-detect step from URL path
    function detectStepFromUrl() {
        const path = window.location.pathname.toLowerCase();
        for (const step of STEPS) {
            if (path.includes(step)) {
                return step;
            }
        }
        return "origin";
    }

    // Initialize flow on page load
    function initFlow() {
        const state = getState();
        const currentStep = detectStepFromUrl();

        // Sync state with current URL
        if (state.step !== currentStep) {
            state.step = currentStep;
            saveState(state);
        }

        // Add step indicator to page
        addStepIndicator(currentStep, state);

        // Add navigation controls
        addNavigationControls(currentStep, state);
    }

    // Add step progress indicator
    function addStepIndicator(currentStep, state) {
        if (document.getElementById("flow-indicator")) return;

        const stepIdx = CANONICAL_ORDER.indexOf(currentStep);
        const total = CANONICAL_ORDER.length;
        const progress = stepIdx >= 0 ? ((stepIdx + 1) / total) * 100 : 0;

        const indicator = document.createElement("div");
        indicator.id = "flow-indicator";
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: rgba(255,255,255,0.1);
            z-index: 9999;
        `;

        const bar = document.createElement("div");
        bar.style.cssText = `
            height: 100%;
            background: linear-gradient(90deg, #07F0FF, #CF7AFF);
            width: ${progress}%;
            transition: width 0.3s ease;
        `;
        indicator.appendChild(bar);
        document.body.appendChild(indicator);

        // Update progress when state changes
        const updateProgress = () => {
            const s = getState();
            const idx = CANONICAL_ORDER.indexOf(s.step);
            const p = idx >= 0 ? ((idx + 1) / total) * 100 : 0;
            bar.style.width = p + "%";
        };
        window._updateFlowProgress = updateProgress;
    }

    // Add Next/Back navigation controls
    function addNavigationControls(currentStep, state) {
        if (document.getElementById("flow-nav")) return;

        const nav = document.createElement("div");
        nav.id = "flow-nav";
        nav.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 12px;
            z-index: 9999;
            font-family: system-ui, -apple-system, sans-serif;
        `;

        // Back button
        const prevStep = getPrevStep(currentStep);
        if (prevStep && !isEntryStep(currentStep)) {
            const backBtn = document.createElement("button");
            backBtn.textContent = "← Back";
            backBtn.style.cssText = `
                padding: 10px 20px;
                background: rgba(255,255,255,0.1);
                color: #fff;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
            `;
            backBtn.onclick = () => navigateTo(prevStep);
            nav.appendChild(backBtn);
        }

        // Next button
        const nextStep = getNextStep(currentStep);
        if (nextStep && !isFinalStep(currentStep)) {
            const nextBtn = document.createElement("button");
            nextBtn.textContent = "Next →";
            nextBtn.style.cssText = `
                padding: 10px 24px;
                background: linear-gradient(135deg, #07F0FF, #CF7AFF);
                color: #000;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(7, 240, 255, 0.4);
            `;
            nextBtn.onclick = () => navigateTo(nextStep);
            nav.appendChild(nextBtn);
        }

        // Reset button (for testing)
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "↺ Reset";
        resetBtn.style.cssText = `
            padding: 8px 16px;
            background: rgba(255,255,255,0.05);
            color: #888;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            margin-left: 8px;
        `;
        resetBtn.onclick = () => {
            sessionStorage.removeItem(STORAGE_KEY);
            sessionStorage.removeItem(CURRENT_STEP_KEY);
            window.location.href = "/create-ai-sex-girlfriend/origin.html";
        };
        nav.appendChild(resetBtn);

        document.body.appendChild(nav);
    }

    // Expose API globally
    window.LovescapeFlow = {
        getState,
        setChoice,
        navigateTo,
        getNextStep,
        getPrevStep,
        getBranchesForStep,
        isFinalStep,
        isEntryStep,
        initFlow,
    };

    // Auto-initialize
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initFlow);
    } else {
        initFlow();
    }
})();
