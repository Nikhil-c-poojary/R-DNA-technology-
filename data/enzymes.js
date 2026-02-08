const enzymes = {

  /* ================= DNA REPLICATION ================= */

  ori: {
    name: "Origin of Replication (OriC)",
    process: "DNA Replication",
    function: "OriC is the specific DNA sequence where DNA replication begins. Initiator proteins bind here to start unwinding of DNA.",
    activities: [
      "Binding of DnaA protein",
      "Local DNA unwinding",
      "Recruitment of helicase"
    ],
    exam: "Replication begins at OriC in prokaryotes.",
    error: "Ori is not a primer.",
    image: "images/ori.png"
  },

  helicase: {
    name: "DNA Helicase",
    process: "DNA Replication",
    function: "DNA helicase unwinds the double helix by breaking hydrogen bonds between base pairs.",
    activities: [
      "ATP-dependent unwinding",
      "Formation of replication fork"
    ],
    exam: "Helicase separates DNA strands.",
    error: "Helicase does not synthesize DNA.",
    image: "images/helicase.png"
  },

  ssb: {
    name: "SSB Proteins",
    process: "DNA Replication",
    function: "Single-strand binding (SSB) proteins bind to exposed single-stranded DNA during replication. They stabilize the strands, prevent re-annealing and secondary structure formation, and ensure smooth movement of the replication fork. SSB proteins support DNA polymerase activity but do not possess enzymatic function themselves.
.",
    activities: [
      "Stabilize ssDNA",
      "Prevent secondary structures"
    ],
    exam: "SSB proteins stabilize unwound DNA.",
    error: "SSB proteins do not unwind DNA.",
    image: "images/ssb.png"
  },

  primase: {
    name: "Primase",
    process: "DNA Replication",
    function: "Primase synthesizes short RNA primers required for DNA polymerase to initiate synthesis.",
    activities: [
      "RNA primer synthesis"
    ],
    exam: "DNA polymerase cannot initiate synthesis without primer.",
    error: "Primase is not DNA polymerase.",
    image: "images/primase.png"
  },

  pol3: {
    name: "DNA Polymerase III",
    process: "DNA Replication",
    function: "DNA polymerase III synthesizes new DNA strands in the 5′→3′ direction.",
    activities: [
      "Leading strand synthesis",
      "Lagging strand synthesis"
    ],
    exam: "DNA Pol III is the main replicative enzyme.",
    error: "Pol III does not remove primers.",
    image: "images/pol3.png"
  },

  pol1: {
    name: "DNA Polymerase I",
    process: "DNA Replication",
    function: "DNA polymerase I removes RNA primers and replaces them with DNA.",
    activities: [
      "Primer removal",
      "Gap filling"
    ],
    exam: "DNA Pol I removes RNA primers.",
    error: "Not the main replicative enzyme.",
    image: "images/pol1.png"
  },

  clamp: {
    name: "Sliding Clamp",
    process: "DNA Replication",
    function: "Sliding clamp holds DNA polymerase onto DNA, increasing processivity.",
    activities: [
      "Prevents polymerase dissociation"
    ],
    exam: "Sliding clamp increases processivity.",
    error: "Sliding clamp is not an enzyme.",
    image: "images/clamp.png"
  },

  ligase: {
    name: "DNA Ligase",
    process: "DNA Replication",
    function: "DNA ligase joins Okazaki fragments by forming phosphodiester bonds.",
    activities: [
      "Seals nicks in DNA"
    ],
    exam: "Ligase joins Okazaki fragments.",
    error: "Ligase does not synthesize DNA.",
    image: "images/ligase.png"
  },

  gyrase: {
    name: "DNA Gyrase",
    process: "DNA Replication",
    function: "DNA gyrase relieves supercoiling ahead of the replication fork.",
    activities: [
      "Relieves torsional stress"
    ],
    exam: "Prevents overwinding of DNA.",
    error: "Gyrase is not helicase.",
    image: "images/gyrase.png"
  },

  /* ================= TRANSCRIPTION ================= */

  rnap: {
    name: "RNA Polymerase",
    process: "Transcription",
    function: "RNA polymerase synthesizes RNA using DNA as a template.",
    activities: [
      "Binds promoter",
      "RNA chain elongation"
    ],
    exam: "RNA polymerase does not require primer.",
    error: "RNA polymerase ≠ DNA polymerase.",
    image: "images/rnap.png"
  },

  sigma: {
    name: "Sigma Factor",
    process: "Transcription",
    function: "Sigma factor helps RNA polymerase recognize promoter regions.",
    activities: [
      "Promoter recognition"
    ],
    exam: "Sigma factor is present in prokaryotes.",
    error: "Sigma factor does not synthesize RNA.",
    image: "images/sigma.png"
  },

  rho: {
    name: "Rho Factor",
    process: "Transcription",
    function: "Rho factor terminates transcription in prokaryotes.",
    activities: [
      "Termination of transcription"
    ],
    exam: "Rho-dependent termination.",
    error: "Rho is not involved in initiation.",
    image: "images/rho.png"
  },

  /* ================= TRANSLATION ================= */

  trs: {
    name: "Aminoacyl-tRNA Synthetase",
    process: "Translation",
    function: "Catalyzes attachment of amino acids to their respective tRNAs.",
    activities: [
      "Amino acid activation",
      "tRNA charging"
    ],
    exam: "Each amino acid has a specific synthetase.",
    error: "This reaction does not occur on ribosome.",
    image: "images/trs.png"
  },

  ifactor: {
    name: "Initiation Factors",
    process: "Translation",
    function: "Initiation factors help assemble ribosome at start codon.",
    activities: [
      "Initiation complex formation"
    ],
    exam: "IF-1, IF-2, IF-3 are prokaryotic initiation factors.",
    error: "Do not confuse with elongation factors.",
    image: "images/if.png"
  },

  ef: {
    name: "Elongation Factors",
    process: "Translation",
    function: "Elongation factors assist amino acid addition and ribosomal movement.",
    activities: [
      "tRNA delivery",
      "Translocation"
    ],
    exam: "EF-Tu and EF-G are elongation factors.",
    error: "Elongation does not occur without factors.",
    image: "images/ef.png"
  },

  rf: {
    name: "Release Factors",
    process: "Translation",
    function: "Release factors recognize stop codons and terminate translation.",
    activities: [
      "Stop codon recognition",
      "Polypeptide release"
    ],
    exam: "Stop codons are recognized by release factors.",
    error: "tRNA does not bind stop codons.",
    image: "images/rf.png"
  }

};

