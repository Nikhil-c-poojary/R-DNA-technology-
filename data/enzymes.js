const enzymes = {
  ori: {
    name: "Origin of Replication (OriC)",
    process: "DNA Replication",
    function: "Serves as the specific DNA sequence where replication begins Provides a binding site for initiator proteins (e.g., DnaA in prokaryotes) Facilitates local unwinding of DNA, forming a replication bubble Determines the direction and progression of replication forks Ensures accurate and timely duplication of the entire genome before cell division In bacteria, the origin of replication is called OriC and is essential for controlled initiation of DNA replication.",
    activities: ["AT-rich region", "Helicase binding"],
    exam: "Initiation site of replication.",
    error: "Not an enzyme.",
    image: "images/uploads/ori.png"
  },

  helicase: {
    name: "DNA Helicase",
    process: "DNA Replication",
    function: "DNA Helicase is an essential enzyme involved in DNA replication. Its primary function is to unwind the double-stranded DNA helix by breaking the hydrogen bonds between complementary base pairs. This unwinding creates two single DNA strands that serve as templates for DNA synthesis. Helicase moves along the DNA in an ATP-dependent manner, separating the strands ahead of the replication fork and allowing other replication enzymes, such as DNA polymerase, to function efficiently. By opening up the DNA helix, helicase plays a crucial role in ensuring accurate and continuous replication of genetic material.
.",
    activities: ["Breaks hydrogen bonds"],
    exam: "Forms replication fork.",
    error: "Does not synthesize DNA.",
    image: "images/uploads/helicase.png"
  },

  ssb: {
    name: "SSB Protein",
    process: "DNA Replication",
    function: "Stabilizes single-stranded DNA.",
    activities: ["Prevents re-annealing"],
    exam: "Maintains ssDNA stability.",
    error: "Does not unwind DNA.",
    image: "images/uploads/ssb.png"
  },

  primase: {
    name: "Primase",
    process: "DNA Replication",
    function: "Synthesizes RNA primer.",
    activities: ["Primer synthesis"],
    exam: "Provides 3′-OH group.",
    error: "Does not elongate DNA.",
    image: "images/uploads/primase.png"
  },

  pol3: {
    name: "DNA Polymerase III",
    process: "DNA Replication",
    function: "Main elongation enzyme.",
    activities: ["5′→3′ synthesis", "Proofreading"],
    exam: "High fidelity replication.",
    error: "Does not remove primer.",
    image: "images/uploads/pol3.png"
  },

  pol1: {
    name: "DNA Polymerase I",
    process: "DNA Replication",
    function: "Removes RNA primers and fills gaps.",
    activities: ["5′→3′ exonuclease"],
    exam: "Primer removal.",
    error: "Not main elongation enzyme.",
    image: "images/uploads/pol1.png"
  },

  ligase: {
    name: "DNA Ligase",
    process: "DNA Replication",
    function: "Joins Okazaki fragments.",
    activities: ["Phosphodiester bond formation"],
    exam: "Seals nicks.",
    error: "Does not synthesize DNA.",
    image: "images/uploads/ligase.png"
  },

  gyrase: {
    name: "DNA Gyrase",
    process: "DNA Replication",
    function: "Relieves supercoiling.",
    activities: ["Topoisomerase II activity"],
    exam: "Prevents DNA tangling.",
    error: "Not involved in elongation.",
    image: "images/uploads/gyrase.png"
  },

  "rna-pol": {
    name: "RNA Polymerase",
    process: "Transcription",
    function: "Synthesizes RNA from DNA template.",
    activities: ["5′→3′ RNA synthesis"],
    exam: "No primer required.",
    error: "Does not proofread.",
    image: "images/uploads/rnap.png"
  },

  sigma: {
    name: "Sigma Factor",
    process: "Transcription",
    function: "Promoter recognition.",
    activities: ["Initiation"],
    exam: "Specificity factor.",
    error: "Not part of core enzyme.",
    image: "images/uploads/sigma.png"
  },

  rho: {
    name: "Rho Factor",
    process: "Transcription",
    function: "Terminates transcription.",
    activities: ["ATP-dependent helicase"],
    exam: "ρ-dependent termination.",
    error: "Not required always.",
    image: "images/uploads/rho.png"
  },

  trs: {
    name: "Aminoacyl-tRNA Synthetase",
    process: "Translation",
    function: "Charges tRNA with amino acids.",
    activities: ["ATP-dependent"],
    exam: "Ensures specificity.",
    error: "Does not form peptide bonds.",
    image: "images/uploads/trna.png"
  }
};

